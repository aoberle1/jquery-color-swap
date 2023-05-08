$(document).ready(onReady);

function onReady(){
    console.log( 'jq' );

    // Using jQuery, append a `<div>` element when you click the button. 
    // It should append a new div each time you click the button.
    $('#generate-button').on( 'click', generateDiv )

    $('#main-body').on( 'click', '.delete-button', removeItem )

    $('#main-body').on( 'click', '.yellow-button', yellowSubmarine )
}

let generatorCounter = 0

// function run each time the generate button is pressed
function generateDiv(event){
    event.preventDefault();
    // increments the value of generatorCounter each time the button is pressed
    generatorCounter++
    $('#main-body').append(`
        <div class="generated-div">
            <p class="generated-p-tag">
                Generator Count: <span id=generator-count>${generatorCounter}</span>
            </p>
            <button class="yellow-button">Yellow</button>
            <button class="delete-button">Delete</button>
        </div>
    `);
}

function removeItem(){
    $(this).parent().remove();
}

function yellowSubmarine(){
    $(this).parent().css("background-color", "yellow");
}