from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src import modelo
from src.db import engine
from src.routes import alumnos

app = FastAPI()

app.include_router(alumnos)

app.add_middleware(
    CORSMiddleware,
    allow_origins = "http://localhost:5173",
    allow_credentials = True,
    allow_methods = ['*'],
    allow_headers = ['*']
)

modelo.Base.metadata.create_all(engine)
