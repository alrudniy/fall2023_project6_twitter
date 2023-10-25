from fastapi import FastAPI

#To start backend, enter into Bash: 
# uvicorn Backend.FastAPI.main:app

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}
