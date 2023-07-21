from sqlalchemy import Column, String, Integer
from datetime import datetime
from src.db import Base

class Alumno(Base):
    __tablename__ = 'Alumnos'
    
    id = Column(Integer, primary_key=True)
    nombre = Column(String, nullable=False)
    apellido = Column(String, nullable=False)
    dni = Column(String, nullable=False)
    code_area = Column(String, nullable=False)
    telefono = Column(String, nullable=False)
    email = Column(String, nullable=False)
    fecha_inscripcion = Column(String, default=datetime.now().strftime("%d-%m-%Y"))
    
