import os
from PIL import Image, ImageDraw, ImageFont

print("🚀 Script para añadir marcas de agua a imágenes en una carpeta y sus subcarpetas.")

def agregar_marca_repetida(ruta_base, texto_marca="Edel's Group", fuente_path=None, tamaño_fuente=36):
    extensiones_validas = ('.jpg', '.jpeg', '.png', '.bmp', '.gif', '.tiff', '.webp')

    if fuente_path is None:
        try:
            fuente = ImageFont.truetype("arial.ttf", tamaño_fuente)
        except:
            fuente = ImageFont.load_default()
            print("⚠️ No se pudo cargar Arial, usando fuente por defecto.")
    else:
        fuente = ImageFont.truetype(fuente_path, tamaño_fuente)

    for carpeta_actual, _, archivos in os.walk(ruta_base):
        for archivo in archivos:
            if archivo.lower().endswith(extensiones_validas):
                ruta_imagen = os.path.join(carpeta_actual, archivo)
                try:
                    with Image.open(ruta_imagen).convert("RGBA") as imagen:
                        ancho, alto = imagen.size
                        marca = Image.new("RGBA", (ancho, alto), (0, 0, 0, 0))
                        draw = ImageDraw.Draw(marca)

                        # Crear patrón repetido en diagonal
                        step_x = 200
                        step_y = 100

                        for y in range(0, alto + step_y, step_y):
                            for x in range(0, ancho + step_x, step_x):
                                # Crear texto individual rotado
                                temp = Image.new("RGBA", (400, 100), (0, 0, 0, 0))
                                temp_draw = ImageDraw.Draw(temp)
                                temp_draw.text((0, 0), texto_marca, font=fuente, fill=(255, 255, 255, 100))  # blanco semitransparente
                                temp_rotado = temp.rotate(30, expand=1)

                                # Pegar en la marca de agua
                                marca.paste(temp_rotado, (x, y), temp_rotado)

                        imagen_con_marca = Image.alpha_composite(imagen, marca).convert("RGB")
                        imagen_con_marca.save(ruta_imagen)
                        print(f"✅ Marca de agua repetida añadida: {ruta_imagen}")
                except Exception as e:
                    print(f"❌ Error con {ruta_imagen}: {e}")

# Ejemplo de uso
agregar_marca_repetida("C:/Users/Esteban Charria/Downloads/Prueba/projects")
