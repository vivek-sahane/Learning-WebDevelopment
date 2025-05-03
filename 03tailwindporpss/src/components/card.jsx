import React from 'react'

function Card(props) {
    console.log("props",props.username);
    
    return (
        <div
    class="flex flex-col sm:flex-row sm:max-w-2xl max-w-xs mx-auto overflow-hidden bg-gray-700 rounded-lg shadow-lg dark:bg-gray-800 p-2">
    <div class="p-2 sm:w-1/2">
        <img class="rounded object-cover w-full sm:h-80 h-60" src="https://i.pinimg.com/564x/41/c7/52/41c75274ffa14f3222691c0cbe3c1904.jpg" alt="Article" />
    </div>
    <div class="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
        <div>
            <a href="#"
                class="block sm:mt-2 text-2xl font-semibold text-gray-50 dark:text-white hover:text-gray-600 hover:underline">{props.username}</a>
            <p class="mt-2 text-sm text-gray-200 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Tenetur labore, cum rem facere obcaecati beatae sunt numquam architecto delectus dignissimos
                explicabo quod pariatur at consequatur sint esse aut Facere. <br/> Numquam architecto delectus dignissimos
            </p>
        </div>

        <div class="mt-4">
            <div class="flex items-center">
                <div class="flex items-center">
                    <img class="object-cover h-10 w-10 rounded-full" src="https://i.pinimg.com/564x/1d/1e/16/1d1e16ad5227a9c726b61bd7cc4eca33.jpg" alt="Avatar" />
                    <a href="#" class="mx-2 font-semibold text-gray-50 dark:text-gray-200">Tocino Code</a>
                </div>
                <span class="mx-1 text-xs text-gray-400 dark:text-gray-300">21 SEP 2015</span>
                <span class="hover:cursor-pointer relative sm:left-12 text-xs text-gray-400 dark:text-gray-300"
          >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg
        >
        </span>
            </div>
        </div>
    </div>
</div>
    )
}


export default Card