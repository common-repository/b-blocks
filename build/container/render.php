<?php
$prefix = 'bBlocksContainer';
$id = wp_unique_id( "$prefix-" );

use BBlocks\Inc\Utils as Utils;
$planClass = Utils::isPro() ? 'pro' : 'free';

$innerBlocks = $content;

extract( $attributes );
extract( $content );

$mainSl = "#$id";
$cSl = "$mainSl .$prefix" . "Content";

$bBlocksContainerCSS = "
	$mainSl{
		min-height: " . Utils::valForZero( $wrapper['minHeight'] ) . ";
		align-items: $horizontalAlign;
		justify-content: $verticalAlign;
	}
	$cSl{
 		width: " . ( $isFullWidth ? '100%' : Utils::valForZero( $width['desktop'], '100%' ) ) . ";
	}
	@media only screen and (min-width:641px) and (max-width: 1024px){
		$cSl{
			width: " . ( $isFullWidth ? '100%' : Utils::valForZero( $width['tablet'], '100%' ) ) . ";
		}
	}
	@media only screen and (max-width: 640px){
		$cSl{
			width: " . ( $isFullWidth ? '100%' : Utils::valForZero( $width['mobile'], '100%' ) ) . ";
		}
	}
";
?>

<div <?php echo get_block_wrapper_attributes(); ?> id='<?php echo esc_attr( $id ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>' data-bblocks-advanced='<?php echo esc_attr( wp_json_encode( $attributes['advanced'] ) ); ?>'>
	<style><?php echo esc_html( $bBlocksContainerCSS ); ?></style>

	<div class='shaped topShaped'></div>

	<div class='<?php echo esc_attr( $prefix ) ?>Content'>
		<?php echo wp_kses_post( $innerBlocks ); ?>
	</div>

	<div class='shaped bottomShaped'></div>
</div>