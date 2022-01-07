<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class District extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'province_id',
        'district',
        'description',
        'latitude',
        'longitude',
        'is_status',
    ];
}
