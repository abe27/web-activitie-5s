<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Profile extends Model
{
    use Uuids, HasFactory, Notifiable, HasApiTokens;

    public $fillable = [
        'user_id',
        'zipcode_id',
        'edu_id',
        'firstname',
        'lastname',
        'empcode',
        'description',
        'address_1',
        'address_2',
        'mobile_no',
        'tel_no',
        'employee_date',
        'birthdate',
        'prefix_name',
        'status',
        'sexual',
        'spouse_name',
        'child',
        'driver_car',
        'driver_license_car',
        'driver_moto',
        'driver_license_moto',
        'driver_floklift',
        'driver_license_floklift',
        'contact_name',
        'contact_mobileno',
        'is_militaried',
        'business_leave',
        'vacation_leave',
        'military_leave',
        'child_birth_leave',
        'priesthood_leave',
        'sick_leave',
        'overleave_business',
        'overleave_priesthood',
        'overleave_sick',
        'overleave_military',
        'birth_day_leave',
        'married_leave',
        'salary',
        'avatar',
        'signature',
        'about',
        'is_passed',
        'is_status',
    ];
}
