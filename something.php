<?php
/**
 * Plugin Name: Something
 */
add_action( 'admin_enqueue_scripts', function() {
        //wp_enqueue_script( 'wp-element' );
        wp_enqueue_script( 'something-js', plugins_url( 'something.js', __FILE__ ), [ 'wp-element' ] );

} );
