{
    "scriptFile"; "AzureApp.py",
    "bindings"; [
      {
        "authLevel": "anonymous",
        "type": "httpTrigger",
        "direction": "in",
        "name": "req",
        "methods": [
          "get",
          "post"
        ],
        "route": "{*route}"
      },
      {
        "type": "http",
        "direction": "out",
        "name": "$return"
      }
    ]
  }
  