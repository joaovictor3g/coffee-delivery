import { googleMapApi } from "@/services/google-maps-api";
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function useGeoLocation() {
  const [location, setLocation] = useState("");

  const toast = useToast();

  async function success(position: GeolocationPosition) {
    const {
      coords: { latitude, longitude },
    } = position;

    try {
      const response = await googleMapApi.get(
        `/geocode/json?latlng=${latitude},${longitude}`
      );
      const results = response.data.results;

      const [{ address_components: addressComponents }] = results;

      const cityName =
        addressComponents.find((address: any) =>
          address.types.some(
            (type: any) => type === "administrative_area_level_2"
          )
        ).short_name ?? "";

      const stateName =
        addressComponents.find((address: any) =>
          address.types.some(
            (type: any) => type === "administrative_area_level_1"
          )
        ).short_name ?? "";

      setLocation(`${cityName}, ${stateName}`);
    } catch {
      toast({
        status: "error",
        title: "Erro",
        description: "Erro ao buscar localizacao do usuario",
      });
      setLocation("Nao encontrado");
    }
  }

  function error(err: GeolocationPositionError) {
    toast({
      status: "error",
      description: err.message,
      title: "Erro",
    });
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true,
      });
    } else {
      toast({
        title: "Erro",
        description: "Geolocation nao e suportado por este browser",
      });
    }
  }, []);

  return {
    location,
  };
}
