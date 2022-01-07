<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Shift extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'title',
        'description',
        'per_shift',
        'is_status',
    ];
}
