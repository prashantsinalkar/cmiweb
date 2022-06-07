<?php
function ds_cmi_layouts_2col_stacked_fluid_20_80() {
  return array(
    'label' => t('CMI 2-Col Stacked Fluid 20-80 Layout'),
    'regions' => array(
	  'header' => t('Header'),
      'left' => t('Left'),
      'right' => t('Right'),
	  'footer' => t('Footer'),
    ),
    // Uncomment if you want to include a CSS file for this layout (cmi_layouts_2col_stacked_fluid_80_20.css).
    'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (cmi_layouts_2col_stacked_fluid_80_20.png).
    'image' => TRUE,
  );
}
