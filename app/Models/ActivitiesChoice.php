<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class ActivitiesChoice extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'category_id',
        'title',
        'description',
        'full_score',
        'is_status',
    ];
}
