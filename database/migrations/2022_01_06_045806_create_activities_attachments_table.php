<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActivitiesAttachmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('activities_attachments', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('activities_id');
            $table->string('image');
            $table->timestamps();
            $table->foreign('activities_id')->references('id')->on('activities')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('activities_attachments');
    }
}
