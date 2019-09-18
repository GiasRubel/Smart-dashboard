<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call( StoreTableSeeder::class );
        $this->call( RolesTableSeeder::class );
        $this->call( GroupsTableSeeder::class );
        $this->call( CountryTableSeeder::class );
        $this->call( DistrictTableSeeder::class );
        $this->call( CurrencyTableSeeder::class );
        $this->call( StatusTableSeeder::class );
        $this->call( PaymentMethodTableSeeder::class );
        $this->call( PaymentOnlineTableSeeder::class );
        $this->call( UsersTableSeeder::class );
        $this->call( AddressTableSeeder::class );
        $this->call( AdminMenuSeeder::class );
        $this->call( ProhibitedItemSeeder::class );
        $this->call( ShipmentRateTableSeeder::class );
        $this->call( TaxRuleTableSeeder::class );
        $this->call( TaxZoneRateTableSeeder::class );
        $this->call( OrderTableSeeder::class );
        $this->call( UsersAddToCardTableSeeder::class );
        $this->call( ProductMeasurementSeeder::class );
        $this->call(ProductMeasurementCategorySeeder::class);
        $this->call(ReviewProductMeasurementSeeder::class);
        $this->call(ConfigurationSeeder::class);
    }
}
