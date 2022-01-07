<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class CheckingArea extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'section_id',
        'activities_id',
        'title',
        'description',
        'is_status',
    ];
}
