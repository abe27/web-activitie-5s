<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDistrictsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('districts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('province_id');
            $table->string('district');
            $table->longText('description')->nullable()->default('-');
            $table->decimal('latitude', 8, 8)->nullable()->default(0);
            $table->decimal('longitude', 8, 8)->nullable()->default(0);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('province_id')->references('id')->on('provinces')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('districts');
    }
}
