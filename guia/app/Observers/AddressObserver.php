<?php
namespace App\observers;
use App\Address;
use AnthonyMartin\GeoLocation\GeoLocation;
class AddressObserver
{
    public function creating(Address $model)
    {
        if(!$model->latitude or $model->logitude){
            $this->setLatAndLog($model);
        }
    }
    public function updating(Address $model)
    {
        $this->setLatAndLog($model);
    }
    private function setLatAndLog($model)
    {
        $location = $model->address . ',' .
            $model->number . ' - ' .
            $model->neighborhood . ' - ' .
            $model->city . ' - ' .
            $model->state . ' - ' .
            $model->address;
        $response = GeoLocation::getGeocodeFromGoogle($location);

        if (!empty($response->results) and is_array($response->results)) {
            $result = array_pop($response->results);
            $model->latitude = $result->geometry->location->lat;
            $model->longitude = $result->geometry->location->lng;
        }
    }
}