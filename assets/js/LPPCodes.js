let LPPCode = "";
let price = "N/A";

function getLPPCode() {
    const age = document.getElementById("ageSlider").value;
    const sphere = document.getElementById("sphereSlider").value;
    const cylinder = document.getElementById("cylinderSlider").value;

    if (document.getElementById("two_1.1").checked) {               // Verre Blanc
        if (document.getElementById("two_2.1").checked) {               // Verre Simple
            if (age < 18) {                                                 // Mineur
                if (cylinder === 0) {
                    if (sphere >= 6.25 && sphere <= 10) {
                        LPPCode = "2243304";
                        price = "26.68";
                    } else if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2261874";
                        price = "12.04";
                    } else if (sphere <= -6.25 && sphere >= -10) {
                        LPPCode = "2243540";
                        price = "26.68";
                    } else {
                        LPPCode = "2273854";
                        price = "44.97";
                    }
                } else if (cylinder <= 4) {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2200393";
                        price = "14.94";
                    } else {
                        LPPCode = "Invalide";
                    }
                } else {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2238941";
                        price = "27.90";
                    } else {
                        LPPCode = "2245036";
                        price = "46.50";
                    }
                }
            } else {                                                        // Majeur
                if (cylinder === 0) {
                    if (sphere >= 6.25 && sphere <= 10) {
                        LPPCode = "2280660";
                        price = "4.12";
                    } else if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2203240";
                        price = "2.29";
                    } else if (sphere <= -6.25 && sphere >= -10) {
                        LPPCode = "2282793";
                        price = "4.12";
                    } else {
                        LPPCode = "2235776";
                        price = "7.62";
                    }
                } else if (cylinder <= 4) {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2259966";
                        price = "3.66";
                    } else {
                        LPPCode = "2284527";
                        price = "6.86";
                    }
                } else {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2212976";
                        price = "6.25";
                    } else {
                        LPPCode = "2288519";
                        price = "9.45";
                    }
                }
            }
        } else {                                                        // Verre Multifocal ou Progressif
            if (cylinder != 0) {
                LPPCode = "Invalide";
            } else {
                if (age < 18) {                                             // Mineur
                    if (sphere >= -4 && sphere <= 4) {
                        LPPCode = "2259245";
                        price = "39.18";
                    } else if (sphere >= -8 && sphere <= 8) {
                        LPPCode = "2240671";
                        price = "43.60";
                    } else {
                        LPPCode = "2234239";
                        price = "66.62";
                    }
                } else {                                                    // Majeur
                    if (sphere >= -4 && sphere <= 4) {
                        LPPCode = "2290396";
                        price = "7.32";
                    } else if (sphere >= -8 && sphere <= 8) {
                        LPPCode = "2227038";
                        price = "10.37";
                    } else {
                        LPPCode = "2202239";
                        price = "24.54";
                    }
                }
            }
        }
    } else {                                                        // Verre Teinté
        if (document.getElementById("two_2.1").checked) {               // Verre Simple
            if (age < 18) {                                                 // Mineur
                if (cylinder === 0) {
                    if (sphere >= 6.25 && sphere <= 10) {
                        LPPCode = "2291088";
                        price = "26.68";
                    } else if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2242457";
                        price = "12.04";
                    } else if (sphere <= -6.25 && sphere >= -10) {
                        LPPCode = "2297441";
                        price = "26.68";
                    } else {
                        LPPCode = "2248320";
                        price = "44.97";
                    }
                } else if (cylinder <= 4) {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2270413";
                        price = "14.94";
                    } else {
                        LPPCode = "2219381";
                        price = "36.28";
                    }
                } else {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2268385";
                        price = "27.90";
                    } else {
                        LPPCode = "2206800";
                        price = "46.50";
                    }
                }
            } else {                                                        // Majeur
                if (cylinder === 0) {
                    if (sphere >= 6.25 && sphere <= 10) {
                        LPPCode = "2265330";
                        price = "4.12";
                    } else if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2287916";
                        price = "2.29";
                    } else if (sphere <= -6.25 && sphere >= -10) {
                        LPPCode = "2263459";
                        price = "4.12";
                    } else {
                        LPPCode = "2295896";
                        price = "7.62";
                    }
                } else if (cylinder <= 4) {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2226412";
                        price = "3.66";
                    } else {
                        LPPCode = "2254868";
                        price = "6.86";
                    }
                } else {
                    if (sphere >= -6 && sphere <= 6) {
                        LPPCode = "2252668";
                        price = "6.25";
                    } else {
                        LPPCode = "2299523";
                        price = "9.45";
                    }
                }
            }
        } else {                                                        // Verre Multifocal ou Progressif
            if (cylinder != 0) {
                LPPCode = "Invalide";
            } else {
                if (age < 18) {                                             // Mineur
                    if (sphere >= -4 && sphere <= 4) {
                        LPPCode = "2264045";
                        price = "39.18";
                    } else if (sphere >= -8 && sphere <= 8) {
                        LPPCode = "2282221";
                        price = "43.60";
                    } else {
                        LPPCode = "2259660";
                        price = "66.62";
                    }
                } else {                                                    // Majeur
                    if (sphere >= -4 && sphere <= 4) {
                        LPPCode = "2291183";
                        price = "7.32";
                    } else if (sphere >= -8 && sphere <= 8) {
                        LPPCode = "2299180";
                        price = "10.37";
                    } else {
                        LPPCode = "2252042";
                        price = "24.54";
                    }
                }
            }
        }
    }
    return (LPPCode);
}

function getPrice() {
    return (price);
}
