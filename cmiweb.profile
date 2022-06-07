<?php

use Drupal\Core\Form\FormStateInterface;

//include_once __DIR__ . '/src/Form/IITBDistributionOptionalModulesForm.php';

/**
 * @file
 * Enables modules and site configuration for the Demo profile.
 */

// Add any custom code here like hook implementations.
//function cmiweb_form_install_configure_form_alter(&$form, FormStateInterface $form_state)
// function cmiweb_install_tasks_alter(&$tasks, $install_state) {
//   // Replace the entire site configuration form provided by Drupal core
//   // with a custom callback function defined by this installation profile.
//   $tasks['i_i_t_b_distribution_optional_modules_form'] = [
//       'display_name' => t('Install IITB Modules'),
//       'type' => 'form',
//       'function' => 'Drupal\cmiweb\Form\IITBDistributionOptionalModulesForm',
//     ];
//   $tasks = cmiweb_array_move('i_i_t_b_distribution_optional_modules_form',11,$tasks);
//   return $tasks;
// }

/*function cmiweb_array_splice_assoc(&$input, $offset, $length, $replacement) {
        $replacement = (array) $replacement;
        $key_indices = array_flip(array_keys($input));
        if (isset($input[$offset]) && is_string($offset)) {
                $offset = $key_indices[$offset];
        }
        if (isset($input[$length]) && is_string($length)) {
                $length = $key_indices[$length] - $offset;
        }

        $input = array_slice($input, 0, $offset, TRUE)
                + $replacement
                + array_slice($input, $offset + $length, NULL, TRUE);
}*/

/*function cmiweb_array_move($which, $where, $array) {
    $tmpWhich = $which;
    $j=0;
    $keys = array_keys($array);

    for($i=0;$i<count($array);$i++)
    {
        if($keys[$i]==$tmpWhich)
            $tmpWhich = $j;
        else
            $j++;
    }
    $tmp  = array_splice($array, $tmpWhich, 1);
    cmiweb_array_splice_assoc($array, $where, 0, $tmp);
    return $array;
}*/

function cmiweb_form_install_configure_form_alter(&$form, $form_state) {

  $form['site_information']['site_name']['#default_value'] = t('CMI Distribution');

  $form['site_information']['site_mail']['#default_value'] = t('test@cmi.com');

  $form['admin_account']['account']['name']['#default_value'] = t('admin');

  $form['admin_account']['account']['pass']['pass1']['#default_value'] = t('admin');

  $form['admin_account']['account']['pass']['pass2']['#default_value'] = t('admin');

  $form['admin_account']['account']['mail']['#default_value'] = t('test@cmi.com');

  $form['regional_settings']['site_default_country']['#default_value'] = 'IN';

  $form['regional_settings']['date_default_timezone']['#default_value'] = 'Asia/Kolkata';
}

function cmiweb_form_install_settings_form_alter(&$form, $form_state) {

  $form['settings']['mysql']['database']['#default_value'] = 'cmiweb';

  $form['settings']['mysql']['username']['#default_value'] = 'admin';

  $form['settings']['mysql']['password']['#default_value'] = '';
}