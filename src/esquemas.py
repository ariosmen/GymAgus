from pydantic import BaseModel

class AlumnoBase(BaseModel):
    nombre: str
    apellido: str
    dni: str
    code_area: int
    telefono: int
    email: str
    
class CrearAlumno(AlumnoBase):
    pass
    
class Alumnos(AlumnoBase):
    id: int
    fecha_inscripcion: str
    
    class Confing:
        orm_mode = True