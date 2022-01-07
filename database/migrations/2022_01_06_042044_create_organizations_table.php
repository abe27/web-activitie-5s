<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrganizationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizations', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('whs_id')->nullable();
            $table->uuid('whszone_id')->nullable();
            $table->uuid('section_id')->nullable();
            $table->uuid('profile_id');
            $table->uuid('position_id')->nullable();
            $table->uuid('shift_id')->nullable();
            $table->longText('description')->nullable()->default('-');
            $table->boolean('is_approve')->nullable()->default(false);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('section_id')->references('id')->on('sections')->nullOnDelete();
            $table->foreign('profile_id')->references('id')->on('profiles')->deleteOnDelete();
            $table->foreign('position_id')->references('id')->on('positions')->nullOnDelete();
            $table->foreign('shift_id')->references('id')->on('shifts')->nullOnDelete();
            $table->foreign('whs_id')->references('id')->on('whs')->nullOnDelete();
            $table->foreign('whszone_id')->references('id')->on('whs_zones')->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('organizations');
    }
}
