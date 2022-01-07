<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateZipCodesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('zip_codes', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('district_id');
            $table->string('zipcode');
            $table->string('tombon');
            $table->longText('description')->nullable()->default('-');
            $table->decimal('latitude', 8, 8)->nullable()->default(0);
            $table->decimal('longitude', 8, 8)->nullable()->default(0);
            $table->boolean('is_status')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('district_id')->references('id')->on('districts')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('zip_codes');
    }
}
