<?php

namespace App\Enums;

enum CardStatus: string
{
    case TODO = 'To Do';
    case IN_PROGRESS = 'In Progress';
    case ON_REVIEW = 'ON Review';
    case DONE = 'Done';

    public static function options(): array
    {
        return collect(self::cases())->map(fn($item) => [
            'value' => $item->value,
            'label' => $item->name,
        ])->values()->toArray();
    }
}
