<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Activities extends Model
{
    use Uuids,HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'on_date',
        'record_by_id',
        'teritories_id',
        'descriptions',
        'score',
        'is_status',
    ];
}
