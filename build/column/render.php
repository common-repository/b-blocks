<?php
$prefix = 'bBlocksColumn';
$id = wp_unique_id( "$prefix-" );
$planClass = BBlocks\Inc\Utils::isPro() ? 'pro' : 'free';

global $allowedposttags;
$allowed_column_html = wp_parse_args( ['style' => []], $allowedposttags );
?>
<div <?php echo get_block_wrapper_attributes( [ 'class' => $planClass ] ); ?> id='<?php echo esc_attr( $id ); ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>
	<div class='<?php echo esc_attr( $prefix ); ?>Style'></div>

	<div class='<?php echo esc_attr( $prefix ); ?>'>
		<?php echo wp_kses( $content, $allowed_column_html ); ?>
	</div>
</div>