<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CountryTest extends TestCase
{
    use RefreshDatabase;

    private $user;

    public function setUp()
    {
        parent::setUp(); // TODO: Change the autogenerated stub

        $this->user = factory(User::class)->create();
    }

    /**
     * A basic test example.
     * @test
     * @return void
     */
    public function check_list_of_country()
    {
        $response = $this->actingAs($this->user)->json('GET', '/dashboard/country');

        $response->assertStatus(200);
    }
}