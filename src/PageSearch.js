import React from 'react';
import './PageSearch.css';
import { Button } from '@material-ui/core';
import SearchResult from './SearchResults';

function PageSearch() {
    return (
        <div className='Pagesearch'>
            <div className="Pagesearch__info">
                <p>12 stays | 12 october to 24 october | 2 Guest
                <h1>Stays Nearby</h1>
                <div className="search__cards"></div>
                </p>
                <Button
                    variant="outlined" className="cancellation">Cancellation policy
                </Button>
                <Button
                    variant="outlined">Type of place
                </Button>
                <Button
                    variant="outlined">Price
                </Button>
                <Button
                    variant="outlined">Rooms and Beds
                </Button>
                <Button
                    variant="outlined">More filters
                </Button>
            </div>
            <SearchResult
                img="https://s31606.pcdn.co/wp-content/uploads/2016/08/hotel-rooms.jpg"
                location="Clean Studio in Paris"
                title="Entire apartment | Whitechapel/Brick Lane"
                description="4 Guest・2 Bedroom・3 Shared Bottoms・WiFi・Kitchen・Free PParking・Washer・Dryer・High Security Doors "
                star={4.2}
                price="$82 / night"
                total="$298 total"
            />
            <SearchResult
                img="https://www.thehotelguru.com/_images/43/44/4344898efa1fc59f1e3759ee924ab161/600x442.jpg"
                location="Modern Studio near Camden Town"
                title="Entire apartment | LB of Camden"
                description="1 Guest・1 Bedroom・1 Bath・WiFi・Enhanced cleaning"
                star={5.0}
                price="$48 / night"
                total="$245 total"
            />
            <SearchResult
                img="https://globalgrasshopper.com/wp-content/uploads/2011/01/Kube-Hotel-Paris-1-1000x667.jpg"
                location="Room in boutique hotel | RB of Kensington and Chelsea"
                title="The Hux Hotel, a 4 Star Boutique, Signature Double"
                description="1 Guest・1 Bedroom・1 Bath・WiFi・Enhanced cleaning"
                star={4.4}
                price="$125 / night"
                total="$2,045 / total"
            />


            <SearchResult
                img="https://zcms.hu/boutiquebudapest/content/sp01.jpg"
                location="5 Star Hotel room in Glendale"
                title="Glendale Private One King Bed"
                description="2 Guests・2 Bedroom・WiFi・TV・Free Parking・Washer・Dryer "
                star={4.7}
                price="$140 / night"
                total="$2,280 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAusNj6LKzQ2ydZ4bRORVX_SXAmeGo0imqvQ&usqp=CAU"
                location="Private room in Pasadena"
                title="Light Filled Wisteria Room"
                description="2 Guests・1 Bedroom・1 Bed・1 Shared bath・WiFi・Air Conditioning"
                star={4.6}
                price="$80 / night"
                total="$1,248 total"
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwr4rWNTOTh7V-DfCFANT8uDJ9dcQv5BcOhA&usqp=CAU"
                location="Entire apartment in West Hollywood"
                title="Stunning 2bedroom in Beverly Hills + Rooftop Pool"
                description="1 Guest・1 Bedroom・1 Bath・WiFi・Washer・Dryer"
                star={4.3}
                price="$520 / night"
                total="$12,458 / total"
            />
        </div>
    )
}

export default PageSearch
