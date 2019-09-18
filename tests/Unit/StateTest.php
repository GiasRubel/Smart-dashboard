<?php

namespace Tests\Unit;
use App\Models\State;
use App\Models\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class StateTest extends TestCase
{

    use RefreshDatabase;

    private $state;
    private $user;

    public function  setUp()
    {
        parent::setUp();

        $this->state = factory(State::class)->create([
            'country_id' => 3
        ]);

        $this->user = factory(User::class)->create();
    }

    /**
     * A basic test example.
     * @test
     * @return void
     */
    public function insert_state()
    {
        $state = State::create([ 'country_id' => 2 , 'title' => 'hayiti']);

        $this->assertEquals('hayiti', $state->name);
    }

    /** @test */
    public function check_names_in_state_table()
    {
        $this->assertNotEmpty($this->state->title);
    }

     /** @test */
     public function chack_all_data_on_state_table()
     {

         $response =$this->actingAs($this->user, 'api')->json('GET', '/dashboard/state');

         $response->assertStatus(200);

     }

     /** @test */
     public function check_for_state_add()
     {
         $data = [
             'title' => $this->state->title,
             'country_id' => $this->state->country_id,
         ];

         $response =$this->actingAs($this->user)->json('POST', '/dashboard/state', $data);
         $response->assertStatus(200);
         $response->assertJson(['success' => "Data Stored"]);
     }

     /** @test */
     public function  check_for_state_update()
     {

         $response = $this->json('GET', '/dashboard/state');
         $response->assertStatus(200);

         $states = $response->getOriginalContent()[0];

         $newState = factory(State::class)->create([
             'country_id' => 5,
         ]);

         $data = [
           'title' => $newState->title,
             'country_id' => $newState->country_id,
         ];
         $update = $this->actingAs($this->user)->json('PUT', '/dashboard/state/'.$states->id, $data);
         $update->assertStatus(200);
         $update->assertJson(['success' => "Data Updated"]);
     }

     /** @test */

     public function check_is_delete_work()
     {

         $response = $this->json('GET', '/dashboard/state');
         $response->assertStatus(200);

         $states = $response->getOriginalContent()[0];

         $delete = $this->actingAs($this->user)->json('DELETE', '/dashboard/state/'.$states->id);
         $delete->assertStatus(200);
     }


}
