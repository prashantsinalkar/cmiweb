<?php
function ds_cmi_layouts_2col_stacked_noresponsive_10_90() {
  return array(
    'label' => t('CMI 2-Col Stacked Fluid 10-90 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'left' => t('Left'),
      'right' => t('Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (cmi_layouts_2col_stacked_noresponsive-10_90.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (cmi_layouts_2col_stacked_noresponsive-10_90.png).
    'image' => TRUE,
  );
}
