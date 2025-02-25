#define BUTTON_PIN 2
#define LED_PIN 1

bool button = 0, led = 0;

// Configurações 
void setup(){
    pinMode(BUTTON_PIN, INPUT_PULLUP);
    pinMode(LED_PIN, OUTPUT); 
}

// Lógica 
void loop(){
   /* if(!button){
        led = 1;
    }
    else{
        led = 0;
    } */
    
    // Lógica mais simplista para o projeto
    led = !button;
    
    //I-O's:
    button = digitalRead(BUTTON_PIN);
    digitalWrite(LED_PIN, led);
}