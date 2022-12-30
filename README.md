# Radiolink

Simple website that sends websocket messages through MQTT protocol to control an internet radio playing through an ESP32, using a VS1053 audio decoder. Pressing the buttons publishes a message over MQTT with the name of the radio station, the ESP32 subscribes to that topic and responds accordingly.
