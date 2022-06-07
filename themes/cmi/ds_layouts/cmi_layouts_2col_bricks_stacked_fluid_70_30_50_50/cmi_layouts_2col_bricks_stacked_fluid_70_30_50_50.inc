<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

/**
 * Defines a Display Suite layout.
 */
function ds_cmi_layouts_2col_bricks_stacked_fluid_70_30_50_50() {
  return array(
    'label' => t('CMI 2-Col Bricks Stacked Fluid 70-30-50-50 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'above_left' => t('Above Left'),
      'above_right' => t('Above Right'),
	  'middle' => t('Middle'),
      'below_left' => t('Below Left'),
      'below_right' => t('Below Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (example_layout.png).
    'image' => TRUE,
  );
}
