(
    () => {
        const convertTemperature = (temperature, convertTo) => {
            switch (convertTo) {
                case "C":
                    return parseInt(((temperature - 32) * (5 / 9))) + "°C°"
                case "F":
                    return parseInt((temperature * 9 / 5) + 32) + "°F°"
            }

        }

        const $btnCookies = document.querySelector("#botonCookies");

        $btnCookies.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        })

        const $cities = document.querySelectorAll(".navbar-item");

        $cities.forEach(function ($city) {
            $city.addEventListener("click", (e) => {
                const city = e.target.innerText;
                const $actualCity = document.querySelector("#actualCity");
                $actualCity.innerText = city;
            })
        })

        const $typeTemp = document.querySelector("#typeTemp");

        $typeTemp.addEventListener('change', (e) => {
            const typeTemp = e.target.value;
            const $dayInfos = document.querySelectorAll(".day_info");
            $dayInfos.forEach(($dayInfo) => {
                const $minTemp = $dayInfo.querySelector("#minTemp");
                const $maxTemp = $dayInfo.querySelector("#maxTemp");
                let minTemp = $minTemp.innerText
                let maxTemp = $maxTemp.innerText
                minTemp = parseInt(minTemp.split('°')[0]);
                maxTemp = parseInt(maxTemp.split('°')[0]);
                minTemp = convertTemperature(minTemp, typeTemp);
                maxTemp = convertTemperature(maxTemp, typeTemp);
                $minTemp.innerText = minTemp;
                $maxTemp.innerText = maxTemp;
            })

        })
        

        //(0 °C × 9/5) + 32 = 32 °F
        //(0 °F − 32) × 5/9 = -17.78 °C

        // Integrarla en una app
        // Crear una AI
    }
)();
//Alerta al cargar la pagina

//Eliminar cookies

//Cambio de temperatura por ciudad