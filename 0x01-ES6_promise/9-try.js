export default function guardrail(mathFunction) {
  const queeue = [];
  try {
    queeue.push(mathFunction());
  } catch (error) {
    queeue.push(`Error: ${error.message}`);
  } finally {
    queeue.push('Guardrail was processed');
  }
  return queeue;
}
