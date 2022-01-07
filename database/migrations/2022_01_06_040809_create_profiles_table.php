<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('user_id');
            $table->uuid('zipcode_id')->nullable();
            $table->uuid('edu_id')->nullable();
            $table->string('firstname');
            $table->string('lastname')->nullable()->default('-');
            $table->string('empcode')->unique();
            $table->longText('description')->nullable()->default('-');
            $table->longText('address_1');
            $table->longText('address_2')->nullable()->default('-');
            $table->string('mobile_no')->nullable()->default('-');
            $table->string('tel_no')->nullable()->default('-');
            $table->date('employee_date')->nullable();
            $table->date('birthdate');
            $table->enum('prefix_name', ['-', 'Mr.', 'Mrs.', 'Miss', 'Ms'])->nullable()->default('-');
            $table->enum('status', ['-', 'S', 'M'])->nullable()->default('-');
            $table->enum('sexual', ['-', 'F', 'M'])->nullable()->default('-');
            $table->string('spouse_name')->nullable();
            $table->integer('child')->nullable()->default(0);
            $table->boolean('driver_car')->nullable()->default(false);
            $table->boolean('driver_license_car')->nullable()->default(false);
            $table->boolean('driver_moto')->nullable()->default(false);
            $table->boolean('driver_license_moto')->nullable()->default(false);
            $table->boolean('driver_floklift')->nullable()->default(false);
            $table->boolean('driver_license_floklift')->nullable()->default(false);
            $table->string('contact_name')->nullable();
            $table->string('contact_mobileno')->nullable();
            $table->boolean('is_militaried')->nullable()->default(false);
            $table->decimal('business_leave', 8, 2)->nullable()->default(0);
            $table->decimal('vacation_leave', 8, 2)->nullable()->default(0);
            $table->decimal('military_leave', 8, 2)->nullable()->default(0);
            $table->decimal('child_birth_leave', 8, 2)->nullable()->default(0);
            $table->decimal('priesthood_leave', 8, 2)->nullable()->default(0);
            $table->decimal('sick_leave', 8, 2)->nullable()->default(0);
            $table->decimal('overleave_business', 8, 2)->nullable()->default(0);
            $table->decimal('overleave_priesthood', 8, 2)->nullable()->default(0);
            $table->decimal('overleave_sick', 8, 2)->nullable()->default(0);
            $table->decimal('overleave_military', 8, 2)->nullable()->default(0);
            $table->decimal('birth_day_leave', 8, 2)->nullable()->default(0);
            $table->decimal('married_leave', 8, 2)->nullable()->default(0);
            $table->decimal('salary', 8, 2)->nullable()->default(0);
            $table->string('avatar')->nullable();
            $table->string('signature')->nullable();
            $table->enum('is_passed', ['-', 'P', 'L'])->nullable()->default('-');
            $table->longText('about')->nullable()->default('-');
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->cascadeOnDelete();
            $table->foreign('zipcode_id')->references('id')->on('zip_codes')->cascadeOnDelete();
            $table->foreign('edu_id')->references('id')->on('education')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
