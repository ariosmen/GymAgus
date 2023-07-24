from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from src.db import get_db
from src import esquemas
from src import crud

alumnos = APIRouter()

@alumnos.get('/alumnos/{id}')
def get_alumnos(id: int, db: Session = Depends(get_db)):
    get_alumno = crud.get_alumno(db, id)
    if get_alumno is None:
        raise HTTPException(400, "No existe un alumno con ese ID")
    return get_alumno

@alumnos.get('/alumnos')
def get_alumnos(db: Session = Depends(get_db)):
    return crud.get_alumnos(db)

@alumnos.post('/alumnos')
def post_alumno(alumno: esquemas.CrearAlumno, db:Session = Depends(get_db)):
    new_alumno = crud.get_email(db, alumno.email)
    if new_alumno:
        raise HTTPException(400, "El alumno ya existe")
    return crud.agregar_alumno(db, alumno)

@alumnos.put('/alumnos/{id}')
def put_alumno(id: int, alumno: esquemas.CrearAlumno, db: Session = Depends(get_db)):
    new_alumno = crud.get_alumno(db, id)
    if new_alumno is None:
        raise HTTPException(400, 'El alumno no existe')
    return crud.actualizar_alumno(db, id, alumno)

@alumnos.delete('/alumnos/{id}')
def delete_alumnos(id: int, db: Session = Depends(get_db)):
    del_alumno = crud.get_alumno(db, id)
    if del_alumno is None:
        raise HTTPException(400, 'El alumno no existe')
    return crud.borrar_alumno(db, id)
