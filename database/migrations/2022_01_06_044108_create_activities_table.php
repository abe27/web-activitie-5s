<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->date('on_date');
            $table->uuid('record_by_id')->nullable();
            $table->uuid('teritories_id');
            $table->longText('descriptions')->nullable();
            $table->decimal('score', 8, 2)->nullable()->default(0);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('record_by_id')->references('id')->on('users')->nullOnDelete();
            $table->foreign('teritories_id')->references('id')->on('checking_areas')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities');
    }
}
