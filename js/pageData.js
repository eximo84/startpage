
var pageOptions = {
    "openLinksInSameTab": true,
    "searchEngineURL": "https://google.com/",
    "displaySeconds": false,
    "background": {
        "randomize": true,
        "minFileName": 20,
        "maxFileName": 24,
        "extension": "jpg",
        "staticBackground": "backgrounds/999.jpg"
    }
}

var columnData = [
    {
        "ContainerName": " Favorites",
        "SymbolPrefix": "fas fa-heart",
        "ChildLinks": [
            {
                "DisplayName": "Home Assistant",
                "Link": "http://google.ca",
                "Image": "images/hass-mono.svg"
            },
            {
                "DisplayName": "Bitwarden",
                "Link": "",
                "Image": "images/bitwarden-mono.svg"
            },
            {
                "DisplayName": "Transmission",
                "Link": "",
                "Image": "images/transmission-mono.svg"
            },
            {
                "DisplayName": "Reddit",
                "Link": "https://www.reddit.com",
                "Image": "images/reddit-mono.svg"
            },
            {
                "DisplayName": "",
                "Link": "",
                "Image": ""
            }
        ]
    },
    {
        "ContainerName": " System",
        "SymbolPrefix": "fas fa-server",
        "ChildLinks": [
            {
                "DisplayName": "Open Media Vault",
                "Link": "",
                "Image": "images/omv-mono.svg"
            },
            {
                "DisplayName": "Webmin",
                "Link": "",
                "Image": "images/webmin-mono.svg"
            },
            {
                "DisplayName": "Portainer",
                "Link": "",
                "Image": "images/portainer-mono.svg"
            },
            {
                "DisplayName": "Glances",
                "Link": "",
                "Image": "images/glances-mono.svg"
            },
            {
                "DisplayName": "Duplicati",
                "Link": "",
                "Image": "images/duplicati-mono.svg"
            }
        ]
    },
    {
        "ContainerName": " Media",
        "SymbolPrefix": "fas fa-photo-video",
        "ChildLinks": [
            {
                "DisplayName": "Plex",
                "Link": "",
                "Image": "images/plex-mono.svg"
            },
            {
                "DisplayName": "Jellyfin",
                "Link": "",
                "Image": "images/jellyfin-mono.svg"
            },
            {
                "DisplayName": "Ombi",
                "Link": "",
                "Image": "images/ombi-mono.svg"
            },
            {
                "DisplayName": "Tautulli",
                "Link": "",
                "Image": "images/TAUTULLI-mono.svg"
            },
            {
                "DisplayName": "Plex WebTools",
                "Link": "",
                "Image": "images/appstore-mono.svg"
            }
        ]
    },
    {
        "ContainerName": " Download",
        "SymbolPrefix": "fas fa-download",
        "ChildLinks": [
            {
                "DisplayName": "Medusa",
                "Link": "",
                "Image": "images/pymedusa-mono.svg"
            },
            {
                "DisplayName": "radarr",
                "Link": "",
                "Image": "images/radarr-mono.svg"
            },
            {
                "DisplayName": "Jackett",
                "Link": "",
                "Image": "images/jackett-mono.svg"
            },
            {
                "DisplayName": "",
                "Link": "",
                "Image": ""
            },
            {
                "DisplayName": "",
                "Link": "",
                "Image": ""
            }
        ]
    },
    {
        "ContainerName": " Home Automation",
        "SymbolPrefix": "fas fa-home",
        "ChildLinks": [
            {
                "DisplayName": "ESPHome",
                "Link": "",
                "Image": "images/esphome-mono.svg"
            },
            {
                "DisplayName": "Z2M Assistant",
                "Link": "",
                "Image": "images/z2m-mono.svg"
            }
        ]
    },
    {
        "ContainerName": " Development",
        "SymbolPrefix": "fas fa-code",
        "ChildLinks": [
            {
                "DisplayName": "Gitea",
                "Link": "",
                "Image": "images/gitea-mono.svg"
            },
            {
                "DisplayName": "Nginx Webroot",
                "Link": "",
                "Image": "images/nginx-mono.svg"
            },
            {
                "DisplayName": "MyWebSQL",
                "Link": "",
                "Image": "images/mysql-mono.svg"
            }
        ]
    },
    {
        "ContainerName": " Applications",
        "SymbolPrefix": "fas fa-app-store",
        "ChildLinks": [
            {
                "DisplayName": "Paperless",
                "Link": "",
                "Image": "images/paperless-mono.svg"
            },
            {
                "DisplayName": "Ubooquity",
                "Link": "",
                "Image": "images/ubooquity-mono.svg"
            },
            {
                "DisplayName": "Ubooquity Admin",
                "Link": "",
                "Image": "images/ubooquity-mono.svg"
            },
            {
                "DisplayName": "ASF",
                "Link": "",
                "Image": "images/asf-mono.svg"
            }
        ]
    },
    {
        "ContainerName": " Network",
        "SymbolPrefix": "fas fa-network-wired",
        "ChildLinks": [
            {
                "DisplayName": "Router",
                "Link": "",
                "Image": "images/router-mono.svg"
            },
            {
                "DisplayName": "traefik",
                "Link": "",
                "Image": "images/traefik-mono.svg"
            },
            {
                "DisplayName": "Pi-hole",
                "Link": "",
                "Image": "images/pihole-mono.svg"
            }
        ]
    }
    
];
