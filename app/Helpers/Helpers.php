<?php

namespace App\Helpers;

class Helpers
{
    public static function htmlFake($number = 4)
    {

        $paragraphs = $number;
        $i = 0;
        $ret = "";
        while ($i < $paragraphs) {
            if (rand(0, 1)) {
                $ret .= "<h3>" . fake()->sentence(3) . "</h3>";
            }
            $ret .= "<p>" . fake()->paragraph(rand(3, 6)) . "</p>";
            $i++;
        }
        return $ret;
    }
}
