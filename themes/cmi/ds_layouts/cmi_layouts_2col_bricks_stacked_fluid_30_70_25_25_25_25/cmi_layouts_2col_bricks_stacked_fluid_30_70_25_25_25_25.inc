<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

/**
 * Defines a Display Suite layout.
 */
function ds_cmi_layouts_2col_bricks_stacked_fluid_30_70_25_25_25_25() {
  return array(
    'label' => t('CMI 2-Col Bricks Stacked Fluid 30-70-25-25-25-25 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'above_left' => t('Above Left'),
      'above_right' => t('Above Right'),
	  'middle' => t('Middle'),
      'below_first' => t('Below First'),
      'below_second' => t('Below Second'),
      'below_third' => t('Below Third'),
      'below_fourth' => t('Below Fourth'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (cmi_layouts_2col_bricks_stacked_fluid_30_70_25_25_25_25.png).
    'image' => TRUE,
  );
}
