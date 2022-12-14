//multiple choice
let mc_input_array = document.querySelectorAll('.mc_question')

mc_input_array.forEach(function(question_answer){
    question_answer.addEventListener('click', check_mc_answer)
})

let fr_input_array = document.querySelectorAll('.submit_button')

fr_input_array.forEach(function(check_answer_element){
    check_answer_element.addEventListener('click', check_fr_answer)
    })

function check_mc_answer(click_event_mc)
{
    let is_correct = click_event_mc.target.classList.contains('mc_correct')

    if (is_correct)
    {
        click_event_mc.target.style.backgroundColor = 'lightgreen'
        let parent_div = click_event_mc.target.parentElement
        parent_div.querySelector('.feedback').innerHTML = "FEEDBACK: Correct!"
    }
    else
    {
        click_event_mc.target.style.backgroundColor = 'red'
        let parent_div = click_event_mc.target.parentElement
        parent_div.querySelector('.feedback').innerHTML = "FEEDBACK: Incorrect, try again"
    }
}

function check_fr_answer(click_event_fr)
{
    let parent_div = click_event_fr.target.parentElement
    let user_answer = parent_div.querySelector('.fr_question')
    let correct_answer = parent_div.querySelector('.correct_answer')

    if (user_answer.value == correct_answer.textContent) //only inputs have values**
    {
        user_answer.style.backgroundColor = 'lightgreen'
        parent_div.querySelector('.feedback').innerHTML = "FEEDBACK: Correct!"
    }
    else
    {
        user_answer.style.backgroundColor = 'red'
        parent_div.querySelector('.feedback').innerHTML = "FEEDBACK: Incorrect, try again"
    }
}