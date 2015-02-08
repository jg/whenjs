/// <reference path="./references.ts" />

declare var when

module Main {
    export function setResults(text: string) {
        $('#results').html(text)
    }

    export function weatherPromise(city: string) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city
        return when($.get(url))
    }

    export function getDescription(data: any): string {
        return data['weather'][0]['description']
    }

    export function add(x, y) {
        return x + y
    }
}

$(document).ready(() => {
    // var cities = ['London', 'Warsaw', 'New York']

    // var promise = Main.weatherPromise('London,uk')

    // var descriptionPromise = promise.then(Main.getDescription)

    // descriptionPromise.catch((error) => {
    //     Main.setResults('error: ' + error)
    // }).done(Main.setResults)

    // var p1 = when(12)
    // var p2 = when(15)
    // var add = (x, y) => { return x + y }
    // var g = when.lift(add)
    // window['g'] = g
    // g(p1, p2).done((v) => {console.log(v)})

    var p1 = when(1).delay(1000)
    var p2 = when(2).delay(2000)
    var p3 = when(3).delay(3000)
    var all = [p1, p2, p3]
    when.all([p1, p2, p3]).done((v) => {console.log(v)})
})