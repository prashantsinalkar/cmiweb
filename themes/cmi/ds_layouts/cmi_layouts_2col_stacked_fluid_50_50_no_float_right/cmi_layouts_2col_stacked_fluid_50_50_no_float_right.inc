<?php

/**
 * @file
 * Display Suite example layout configuration.
 */

/**
 * Defines a Display Suite layout.
 */
function ds_cmi_layouts_2col_stacked_fluid_50_50() {
  return array(
    'label' => t('CMI 2-Col Stacked Fluid 50-50 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'left' => t('Left'),
      'right' => t('Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (example_layout.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (example_layout.png).
    'image' => TRUE,
  );
}
