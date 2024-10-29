<?php
namespace BBlocks\Inc\Posts;

use BBlocks\Inc\Utils as Utils;

require_once B_BLOCKS_DIR_PATH . '/includes/posts/Functions.php';

class Posts{
	public function __construct(){
		add_filter( 'b_blocks_posts_excerpt_filter', function( $plainText, $htmlContent ){
			return $htmlContent;
		}, 10, 3 );
	}

	static function query( $attributes ){
		extract( $attributes );

		$selectedCategories = $selectedCategories ?? [];
		$selectedTaxonomies = $selectedTaxonomies ?? [];

		$termsQuery = ['relation' => 'AND'];
		foreach ( $selectedTaxonomies as $taxonomy => $terms ){
			if( count( $terms ) ){
				$termsQuery[] = [
					'taxonomy'	=> $taxonomy,
					'field'		=> 'term_id',
					'terms'		=> $terms,
				];
			}
		}

		$defaultPostQuery = 'post' === $postType ? [
			'category__in'	=> $selectedCategories,
			'tag__in'		=> $selectedTags ?? []
		] : [];

		$postsInclude = Functions::filterNaN( $postsInclude ?? [] );
		$post__in = !empty( $postsInclude ) ? [ 'post__in' => $postsInclude ] : [];
		$postsExclude = Functions::filterNaN( $postsExclude ?? [] );

		$query = array_merge( [
			'post_type'			=> $postType,
			'posts_per_page'	=> $isPostsPerPageAll ? -1 : $postsPerPage,
			'orderby'			=> $postsOrderBy,
			'order'				=> $postsOrder,
			'tax_query'			=> $termsQuery,
			'offset'			=> $isPostsPerPageAll ? 0 : $postsOffset,
			'post__not_in'		=> $isExcludeCurrent ? array_merge( [ get_the_ID() ], $postsExclude ) : $postsExclude,
			'has_password'		=> false,
			'post_status'		=> 'publish'
		], $post__in, $defaultPostQuery );

		if( Utils::isPro() ) {
			$query = apply_filters( 'b_blocks_posts_query', $query );
		}

		return $query;
	}

	static function getPosts( $attributes, $pageNumber = 1 ){
		extract( $attributes );

		$attributes['isPostsPerPageAll'] = 'true' === $isPostsPerPageAll;
		$attributes['isExcludeCurrent'] = 'true' === $isExcludeCurrent;

		$newArgs = wp_parse_args( [ 'offset' => ( $postsPerPage * ( $pageNumber - 1 ) ) + $postsOffset ], self::query( $attributes ) );
		$posts = Functions::arrangedPosts(
			get_posts( $newArgs ),
			$postType,
			$fImgSize,
			$metaDateFormat,
			$excerptLength
		);

		return $posts;
	}

	static function skeletonArticle( $prefix ){
		$articleEl = "<article class='". $prefix ."Article'>
			<span class='". $prefix ."LoadingItem ". $prefix ."ElThumb'></span>
			
			<div class='". $prefix ."ElTexts'>
				<div class='". $prefix ."ElTitle'>
					<span class='". $prefix ."LoadingItem'></span>
					<span class='". $prefix ."LoadingItem'></span>
				</div>
				<div class='". $prefix ."ElMeta'>
					<span class='". $prefix ."LoadingItem'></span>
				</div>
				<div class='". $prefix ."ElExcerpt'>
					<span class='". $prefix ."LoadingItem'></span>
					<span class='". $prefix ."LoadingItem'></span>
					<span class='". $prefix ."LoadingItem'></span>
					<span class='". $prefix ."LoadingItem'></span>
				</div>
				<div class='". $prefix ."ElReadMore'>
					<span class='". $prefix ."LoadingItem'></span>
				</div>
			</div>
		</article>";

		ob_start();
			echo wp_kses( $articleEl, [ 'article' => [ 'class' => [] ], 'div' => [ 'class' => [] ], 'span' => [ 'class' => [] ] ] );
		return ob_get_clean();
	}

	static function loadingPlaceholder( $attributes, $prefix ){
		extract( $attributes );
		$posts = self::getPosts( $attributes );

		$colD = $columns['desktop'];
		$colT = $columns['tablet'];
		$colM = $columns['mobile'];
		$gridClass = $prefix ."LayoutGrid columns-$colD columns-tablet-$colT columns-mobile-$colM";

		$placeholderId = wp_unique_id( $prefix .'LoadingPlaceholder-' );

		$sliderStyles = "#$placeholderId .$prefix" . "SliderSkeleton article{
			min-height: $sliderHeight;
		}";

		ob_start(); ?>
			<div class='<?php echo esc_attr( $prefix ); ?>LoadingPlaceholder' id='<?php echo esc_attr( $placeholderId ); ?>'>
				<?php switch ( $layout ) {
					case 'grid1': ?>
						<div class='<?php echo esc_attr( $prefix ); ?>LayoutGrid1'>
							<?php foreach ( range( 1, count( $posts ) ) as $item ) {
								echo self::skeletonArticle( $prefix );
							} ?>
						</div>
					<?php break;
					case 'slider': ?>
						<style>
							<?php echo esc_html( $sliderStyles ); ?>
						</style>
						<div class='<?php echo esc_attr( $prefix ); ?>SliderSkeleton'>
							<div class='swiper-wrapper'>
								<?php foreach ( range( 1, 2 ) as $item ) {
									echo self::skeletonArticle( $prefix );
								} ?>
							</div>
							<?php echo $sliderIsPage ? "<div class='swiper-pagination'></div>" : ''; ?>
							<?php echo $sliderIsPrevNext ? "<div class='swiper-button-prev'></div><div class='swiper-button-next'></div>" : ''; ?>
						</div>
					<?php break;
					case 'ticker': ?>
						<div class='<?php echo esc_attr( $prefix ); ?>LayoutTicker'>
							<?php foreach ( range( 1, $tickerVisible ) as $item ) {
								echo self::skeletonArticle( $prefix );
							} ?>
						</div>
					<?php break;
					default: ?>
						<div class='<?php echo esc_attr( $gridClass ); ?>'>
							<?php foreach ( range( 1, count( $posts ) ) as $item ) {
								echo self::skeletonArticle( $prefix );
							} ?>
						</div>
					<?php break;
				} ?>
			</div>
		<?php return ob_get_clean();
	}
}

if( Utils::isPro() ) {
	require_once B_BLOCKS_DIR_PATH . '/includes/posts/Ajax.php';
}