<?php

namespace Tests\Unit;

use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProfileTest extends TestCase
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
    public function update_user_profile()
    {
        $response =$this->actingAs($this->user, 'api')->json('GET', '/api/auth/profile');

        $response->assertStatus(200);

        $data = $this->user->toArray();

        $response = $this->actingAs($this->user,'api')->json('PATCH', '/api/auth/user/update', $data);
        $response->assertStatus(200);
    }
}
