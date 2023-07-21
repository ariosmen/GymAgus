from sqlalchemy.orm import Session
from src import modelo
from src import esquemas

def get_email(db: Session, email: str):
    return db.query(modelo.Alumno).filter(modelo.Alumno.email == email).first()

def get_alumno(db: Session, id: int):
    return db.query(modelo.Alumno).filter(modelo.Alumno.id == id).first()

def get_alumnos(db: Session):
    return db.query(modelo.Alumno).all()

def agregar_alumno(db: Session, alumno: esquemas.CrearAlumno):
    new_alumno = modelo.Alumno(**alumno.dict())
    db.add(new_alumno)
    db.commit()
    db.refresh(new_alumno)
    return new_alumno

def actualizar_alumno(db: Session, id: int, alumno: esquemas.CrearAlumno):
    new_alumno = db.query(modelo.Alumno).filter(modelo.Alumno.id == id)
    new_alumno.update(alumno.dict())
    db.commit()
    return db.query(modelo.Alumno).filter(modelo.Alumno.id == id).first()

def borrar_alumno(db: Session, id: int):
    db.query(modelo.Alumno).filter(modelo.Alumno.id == id).delete()
    db.commit()
    return "Alumno eliminado"
    

    