<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Organization extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'whs_id',
        'whszone_id',
        'section_id',
        'profile_id',
        'position_id',
        'shift_id',
        'description',
        'is_approve',
        'is_status',
    ];
}
