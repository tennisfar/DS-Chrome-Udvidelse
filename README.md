# DS Chrome Udvidelse

## Installationsguide (uden Git)

1. **Download Udvidelsen**:
    - Download udvidelsens kildekode som en ZIP-fil fra repository.
    - Udpak ZIP-filen til en mappe på din computer.

2. **Indlæs Udvidelsen i Chrome**:
    - Åbn Chrome og gå til `chrome://extensions/`.
    - Aktiver "Developer mode" ved at slå kontakten i øverste højre hjørne.
    - Klik på knappen "Load unpacked".
    - Vælg den udpakkede mappe.

3. **Verificer Installation**:
    - Udvidelsen skulle nu vises på listen over installerede udvidelser.
    - Sørg for, at den er aktiveret og fungerer som forventet.

Du har nu succesfuldt installeret DS Chrome Udvidelsen i Developer Mode.

## Installationsguide (med Git)

1. **Klon Repositoriet**:
    - Åbn en terminal og kør følgende kommando for at klone repositoriet:
      ```sh
      git clone <repository-url>
      ```
    - Naviger til den klonede mappe:
      ```sh
      cd ds-chrome-extension
      ```

2. **Indlæs Udvidelsen i Chrome**:
    - Åbn Chrome og gå til `chrome://extensions/`.
    - Aktiver "Developer mode" ved at slå kontakten i øverste højre hjørne.
    - Klik på knappen "Load unpacked".
    - Vælg den klonede mappe.

3. **Verificer Installation**:
    - Udvidelsen skulle nu vises på listen over installerede udvidelser.
    - Sørg for, at den er aktiveret og fungerer som forventet.

Du har nu succesfuldt installeret DS Chrome Udvidelsen i Developer Mode.

## Opdateringer

### Version 0.39
Fjernet "Focus" knappen fra Jirasager.

### Version 0.38
Der kan nu laves branches for DLOA sager.

### Version 0.37.2
Knappen "Åben siden i Sitecore" virker nu igen.

### Version 0.37.1
Til at vise Grid beregnes CSS værdierne nu ud fra CSS variabler.

### Version 0.37
Tilføjet mulighed for at se grid'et på Danske Spil ved at trykke CTRL+G.

### Version 0.36
Hvis man er på en Tivoli Casino Jira, og vil lave en branch, så laves branchen nu i det rigtige Tivoli Casino repository.

### Version 0.35
Oprydning, fjernet ubrugte knapper.

### Version 0.34
Synliggjort Sitecore modulfejl.

### Version 0.33
Tilføjet mulighed for at lave branches fra Jira "CW" tasks.

### Version 0.32
Tilføjet en "Focus" knap på Jirasider.

### Version 0.31
Sitecore forbedringer virker nu, udover for web.develop, også for web.trunk.

### Version 0.30
Der kan nu laves branches fra både IU og FOR jirasager.

### Version 0.29
Fixet et problem med at "rød konto" var defineret som DLI.

### Version 0.28
Tilføjet "Create branch" CTA på IU Jira tasks.

### Version 0.27
Fjernet "Lav Jira" knapper. Tilføjet webpack til build setup.

### Version 0.26
Mindre fejlrettelser.

### Version 0.25
Når man klikker på en valgmulighed i en treelist, så kommer der et link frem i bunden, som ved klik åbner en ny fane med det valgte Sitecore item.

![](assets/ChromeExtensionAddUrlToTreeListIds.jpg)
