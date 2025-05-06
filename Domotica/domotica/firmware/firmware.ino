// Inclui as bibliotecas necessárias
#include <WiFi.h>               // Biblioteca para conectar o ESP32 ao WiFi
#include <HTTPClient.h>         // Biblioteca para fazer requisições HTTP
#include <ArduinoJson.h>        // Biblioteca para trabalhar com dados JSON

// Defina as credenciais do WiFi
const char* ssid = "Wokwi-GUEST";  // Nome da rede WiFi
const char* password = "";         // Senha da rede WiFi (vazia, no caso da rede pública Wokwi-GUEST)

// URL da API do Contentful
const char* contentfulURL = "https://cdn.contentful.com/spaces/0tmn4pxpa056/environments/master/entries?content_type=device&select=fields.pin,fields.state";

// Token de acesso à API Contentful (autenticação)
const char* acessToken = "Bearer NBUbAys7sK4W2CBWqzeVCiCj55etRHVdj1lFP8nXhRA";

// Variáveis para controlar o tempo de scan
unsigned long timerScan = 0;   // Timer usado para controlar o intervalo de scans
#define SCAN_DELAY 3000         // Delay de 3 segundos entre as requisições

// Função de configuração inicial do ESP32
void setup()
{
    Serial.begin(115200);        // Inicia a comunicação serial para depuração
    WiFi.begin(ssid, password);  // Inicia a conexão WiFi com as credenciais fornecidas

    Serial.println("Starting Wifi connection...");  // Mensagem inicial indicando que a conexão está sendo feita

    // Aguarda até que a conexão WiFi seja estabelecida
    while(WiFi.status() != WL_CONNECTED) {
        delay(100);  // Atraso de 100 ms entre tentativas
        Serial.print("*");  // Exibe um '*' a cada tentativa de conexão
    }

    // Quando a conexão WiFi for bem-sucedida, imprime o nome da rede conectada
    Serial.println("\nSuccesfully connected with: ");
    Serial.println(ssid);
}

// Função principal que é executada repetidamente
void loop()
{
    // Verifica se o tempo decorrido desde a última execução da scanRoutine() é maior ou igual ao valor de SCAN_DELAY (3 segundos)
    if ((millis() - timerScan) >= SCAN_DELAY) {
        Serial.println("\n**** SCAN START ****\n"); // Printa **** SCAN START **** no começo do scan
        scanRoutine();  // Chama a função de rotina de scan
        timerScan = millis(); // Atribui o valor atual de millis() ao timerScan
        Serial.println("\n**** SCAN END ****\n"); // Printa **** SCAN END **** ao final do scan
    }
}

// Função para realizar a rotina de scan
void scanRoutine() {
    HTTPClient http;
    http.begin(contentfulURL);
    http.addHeader("Authorization", acessToken);

    int httpResponseStatus = http.GET();

    if (httpResponseStatus > 0) {
        String response = http.getString();

        const int responseSize = response.length() * 1.1;
        DynamicJsonDocument json(responseSize);
        deserializeJson(json, response);

        JsonArray items = json["items"];

        for(JsonObject item : items){
            int pin = item["fields"]["pin"] | -1;
            bool state = item["fields"]["state"] | false;

            if(pin >= 0) {
                pinMode(pin, OUTPUT);
                digitalWrite(pin, state);
                Serial.printf("PIN: %d, STATE: %d", pin, state ? "ON" : "OFF");
            }
        }
    }
    else {
        Serial.printf("Error when calling backend: %d", httpResponseStatus);
    }
    
    http.end();
}