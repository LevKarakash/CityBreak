Kroki do uruchomienia:

1. Instalacja LLM:

  Instalować LLM ta pobrać model TheBloke/Mistral-7B-Instruct-v0.1-GGUF, wersja "mistral-7b-instruct-v0.1.Q5_0.gguf"
  Wejść do sekcji Local Server ta wybierz pobrany model.
  Nacisnąć "Start Server", ale upewnij się że port serwera ustawiony na 8000.
  
2. Pobrać klucz API:
   
Wejść na stronę: https://platform.openai.com/api-keys ta stworzyć nowy klucz API
Wstawić otrzymany klucz API do pliku "index.js" w miejscu na klucz, które zaznaczyłem.

3. Uruchomienie ta korzystanie:
   
W terminali Visual Studio Code lub w wierszu poleceń wpisać "npm i" ta "node index.js"
Otworzyć przeglądarkę i wpisać adres "http://localhost:3000/" lub użyć ctrl + klik po adresie, który wyświetlany w konsoli.
Wpisać zapytanie w pole "Wpisz wiadomość ta nacisnąć "Wyślij"
