<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

/**
 * Defines a Display Suite layout.
 */
function ds_cmi_layouts_3col_stacked_fluid_25_50_25() {
  return array(
    'label' => t('CMI 2-Col Stacked Fluid 25-50-25 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'left' => t('Left'),
	  'middle' => t('Middle'),
      'right' => t('Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (example_layout.png).
    'image' => TRUE,
  );
}
